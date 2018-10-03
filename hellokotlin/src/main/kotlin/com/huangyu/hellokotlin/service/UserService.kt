package com.huangyu.hellokotlin.service

import com.huangyu.hellokotlin.dao.User

interface UserService {
    fun add(name: String, age: String): User
}