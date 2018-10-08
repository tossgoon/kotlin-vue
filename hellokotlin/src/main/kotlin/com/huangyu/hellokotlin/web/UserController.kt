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
        var user: User = this.userService.add("wangyu", "100");
        return user;
    }

    @RequestMapping(value = "get")
    fun getUser(id: Long?): User {
        return User(id = id, name = "wangyu", age = "vue-study-test");
    }
}