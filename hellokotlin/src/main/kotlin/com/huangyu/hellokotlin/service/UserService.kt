package com.huangyu.hellokotlin.service

import com.huangyu.hellokotlin.dao.User
import org.springframework.data.domain.Page

interface UserService {
    fun add(user: User): User
    fun get(id: Long?): User
    fun page(pageIndex: Int, pageSize: Int): Page<User>
    fun del(id: Long?)
}