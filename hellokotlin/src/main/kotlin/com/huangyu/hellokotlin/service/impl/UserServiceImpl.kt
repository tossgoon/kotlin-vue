package com.huangyu.hellokotlin.service.impl

import com.huangyu.hellokotlin.dao.User
import com.huangyu.hellokotlin.dao.repo.UserRepository
import com.huangyu.hellokotlin.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class UserServiceImpl : UserService {

    @Autowired
    lateinit var userRepository: UserRepository

    override fun add(name: String, age: String?, phone: String): User {
        val user = User(id = null, name = name, age = age, phone = phone)
        userRepository.save(user)

        return user
    }

    override fun get(id: Long?): User {
        return userRepository.getOne(id)
    }

    override fun list(): List<User> {
        return userRepository.findAll()
    }

    override fun del(id: Long?) {
        userRepository.delete(id)
    }
}
