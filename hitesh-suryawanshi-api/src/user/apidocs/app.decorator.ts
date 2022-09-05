import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { AppResponse } from './../../common/types/app-response.dto';

export const GetUserDocs = () =>
  applyDecorators(
    ApiOperation({
      description: `Returns all details about user such as title and body.`,
      summary: 'Get User information by id',
    }),
    ApiParam({
      name: 'id',
      description: 'User Id of the user ',
    }),
    ApiOkResponse({
      description: 'OK',
    }),
    ApiResponse({
      type: AppResponse,
    }),
    ApiBadRequestResponse({
      description:
        'When the user does not provide required parameters / provides invalid values for the operation :id',
    }),
    ApiInternalServerErrorResponse({
      description: `When there's an unrecoverable server or service error`,
    }),
    ApiNotFoundResponse({
      description: `When user does not exist for requested userId`,
    }),
    ApiConflictResponse({
      description: `When user exist but either title or body missing for that user`,
    }),
  );

export const GetUserAllDocs = () =>
  applyDecorators(
    ApiOperation({
      description: `Returns all details about all users.`,
      summary: 'Get Users information',
    }),
    ApiOkResponse({
      description: 'OK',
    }),
    ApiResponse({
      type: AppResponse,
    }),
    ApiInternalServerErrorResponse({
      description: `When there's an unrecoverable server or service error`,
    }),
    ApiNotFoundResponse({
      description: `When there is no user exist in database`,
    }),
    ApiConflictResponse({
      description: `When user exist but either title or body missing for that user`,
    }),
  );
