package com.huangyu.hellokotlin.web

import com.google.gson.GsonBuilder
import com.huangyu.common.gson.GsonLongTypeAdapter
import com.huangyu.common.web.ApiResponse
import com.huangyu.hellokotlin.dao.User
import com.huangyu.hellokotlin.dao.page.BootstrapPage
import com.huangyu.hellokotlin.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("user")
class UserController {

    @Autowired
    lateinit var userService: UserService

    @RequestMapping("add")
    fun addUser(userJson: String): ApiResponse {
        val gson = GsonBuilder().serializeNulls().registerTypeAdapter(Long::class.java, GsonLongTypeAdapter()).create()
        var user = gson.fromJson(userJson, User::class.java)
        return ApiResponse.ok(userService.add(user))
    }

    @RequestMapping("get")
    fun getUser(id: Long?): ApiResponse {
        return ApiResponse.ok(userService.get(id))
    }

    @RequestMapping("page")
    fun getUserPage(pageIndex: Int, pageSize: Int): ApiResponse {
        val page = userService.page(pageIndex, pageSize)
        val bootstrapPage = BootstrapPage(Integer.parseInt(page.totalElements.toString()), page.toList())
        return ApiResponse.ok(bootstrapPage)
    }

    @RequestMapping("del")
    fun delUser(id: Long?): ApiResponse {
        userService.del(id)
        return ApiResponse.ok()
    }
}