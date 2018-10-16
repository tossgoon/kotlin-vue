package com.huangyu.hellokotlin.web

import com.google.gson.GsonBuilder
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
    fun addUser(userJson: String): User {
        val gson = GsonBuilder().serializeNulls().registerTypeAdapter(Long::class.java, GsonLongTypeAdapter()).create()
        val user = gson.fromJson<User>(userJson, User::class.java)
        return userService.add(user)
    }

    @RequestMapping(value = "get")
    fun getUser(id: Long?): User {
        return userService.get(id)
    }

    @RequestMapping(value = "page")
    fun getUserPage(pageIndex: Int, pageSize: Int): BootstrapPage<User> {
        val page = userService.page(pageIndex, pageSize)
        return BootstrapPage(Integer.parseInt(page.totalElements.toString()), page.toList())
    }

    @RequestMapping(value = "del")
    fun delUser(id: Long?) {
        userService.del(id)
    }
}