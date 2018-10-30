package com.huangyu.hellokotlin.web

import com.huangyu.common.web.ApiResponse
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestController

@ControllerAdvice @RestController
class ErrorController {

    // TODO 目前统一处理所有异常了
    @ExceptionHandler(value = Exception::class)
    fun handleException(ex: Exception): ApiResponse {
        return ApiResponse.fail(ex.message)
    }
}
