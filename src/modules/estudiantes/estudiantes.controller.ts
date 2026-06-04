import { Controller, Get, Post, Body } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dtos/create-estudiante.dto';
import { Estudiante } from './estudiante.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Estudiantes')
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo estudiante' })
  @ApiResponse({
    status: 201,
    description: 'El estudiante ha sido creado exitosamente.',
    type: Estudiante,
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(
    @Body() createEstudianteDto: CreateEstudianteDto,
  ): Promise<Estudiante> {
    return this.estudiantesService.create(createEstudianteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los estudiantes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de estudiantes.',
    type: [Estudiante],
  })
  findAll(): Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }
}
