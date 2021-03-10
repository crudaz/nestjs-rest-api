import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    UseInterceptors,
    UploadedFile,
    Request,
    Res,
  } from '@nestjs/common';
  import { Observable, of } from 'rxjs';
  import { CreateUserDto } from './dto/create-user.dto';
  import { IUser } from './interfaces/user.interface';
  import { UsersService } from './users.service';
  
  import { FileInterceptor } from "@nestjs/platform-express";
  import { diskStorage } from 'multer';
  import { v4 as uuidv4 } from "uuid";
  import path = require('path');
  import { join } from 'path';

  export const storage = {
    storage: diskStorage({
      destination: './uploads/profileimages',
      filename: (req, file, cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
        const extension: string = path.parse(file.originalname).ext;

        cb(null, `${filename}${extension}`)
      }
    })
  }

  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get()
    findAll(): Promise<IUser[]> {
      return this.usersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') options: object): Promise<IUser> {
      return this.usersService.findOne(options);
    }
  
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
      return this.usersService.create(createUserDto);
    }

    @Put(':id')
    update(
      @Param('id') ID: number,
      @Body() updateUserDto: any,
      // @Body() updateUserDto: CreateUserDto,
    ): Promise<IUser> {
      return this.usersService.update(ID, updateUserDto);
    }
  
    @Delete(':id')
    // delete(@Param('id') ID: number): Promise<IUser> {
    delete(@Param('id') ID: number): Promise<any> {
      return this.usersService.delete(ID);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file, @Request() req): Observable<Object> {
      const user: any = req.user;
      // return this.usersService.update(user.id, {imageProfile: file.filename}).pipe(
      //   tap((user: any) => console.log(user)),
      //   map((user: any) => ({imageProfile: user.profileImage}))
      // )
      return of({
        imagePath: file.filename
      })
    }

    @Get('profile-image/:imagename')
    findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(), 'uploads/profileimages/' + imagename)));
    }

  }