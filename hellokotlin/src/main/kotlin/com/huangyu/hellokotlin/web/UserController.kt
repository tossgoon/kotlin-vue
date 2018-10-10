package com.huangyu.hellokotlin.web

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
    fun addUser(): User {
        return userService.add("wangyu", "100")
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