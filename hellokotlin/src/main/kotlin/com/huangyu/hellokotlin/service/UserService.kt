package com.huangyu.hellokotlin.service

import com.huangyu.hellokotlin.dao.User

interface UserService {
    fun add(user: User): User
    fun get(id: Long?): User
    fun list(): List<User>
    fun del(id: Long?)
}