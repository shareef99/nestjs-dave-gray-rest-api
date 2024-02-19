import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get()
  findAllByRole(@Query("role") role: string) {
    return { role };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() user: object) {
    return { id, ...user };
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return { id };
  }
}
