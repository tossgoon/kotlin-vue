package com.huangyu.hellokotlin.web

import com.google.gson.Gson
import com.huangyu.hellokotlin.dao.User
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
        val user: User = Gson().fromJson(userJson, User::class.java)
        return userService.add(user)
    }

    @RequestMapping(value = "get")
    fun getUser(id: Long?): User {
        return userService.get(id)
    }

    @RequestMapping(value = "list")
    fun getUserList(): List<User> {
        return userService.list()
    }

    @RequestMapping(value = "del")
    fun delUser(id: Long?) {
        userService.del(id)
    }
}