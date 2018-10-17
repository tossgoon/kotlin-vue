package com.huangyu.hellokotlin.web

import com.google.gson.GsonBuilder
import com.huangyu.common.web.ApiResponse
import com.huangyu.hellokotlin.dao.User
import com.huangyu.hellokotlin.dao.page.BootstrapPage
import com.huangyu.hellokotlin.lib.gson.GsonLongTypeAdapter
import com.huangyu.hellokotlin.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = "user")
class UserController {

    @Autowired
    lateinit var userService: UserService

    @RequestMapping(value = "add")
    fun addUser(userJson: String): ApiResponse {
        val gson = GsonBuilder().serializeNulls().registerTypeAdapter(Long::class.java, GsonLongTypeAdapter()).create()
        var user = gson.fromJson<User>(userJson, User::class.java)
        user = userService.add(user)
        return ApiResponse.ok(user)
    }

    @RequestMapping(value = "get")
    fun getUser(id: Long?): User {
        return userService.get(id)
    }

    @RequestMapping(value = "page")
    fun getUserPage(pageIndex: Int, pageSize: Int): ApiResponse {
        val page = userService.page(pageIndex, pageSize)
        val bootstrapPage = BootstrapPage(Integer.parseInt(page.totalElements.toString()), page.toList())
        return ApiResponse.ok(bootstrapPage)
    }

    @RequestMapping(value = "del")
    fun delUser(id: Long?) {
        userService.del(id)
    }
}