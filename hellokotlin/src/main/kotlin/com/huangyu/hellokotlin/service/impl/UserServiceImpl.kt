package com.huangyu.hellokotlin.service.impl

import com.huangyu.hellokotlin.dao.Car
import com.huangyu.hellokotlin.dao.User
import com.huangyu.hellokotlin.dao.repo.CarRepository
import com.huangyu.hellokotlin.dao.repo.UserRepository
import com.huangyu.hellokotlin.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

@Service
class UserServiceImpl : UserService {
    @Autowired lateinit var userRepository: UserRepository
    @Autowired lateinit var carRepository: CarRepository

    override fun add(user: User): User {
        for(car :Car in user.carList!!)
            car.user = user
        return userRepository.save(user)
    }

    override fun get(id: Long?): User {
        return userRepository.getOne(id)
    }

    override fun page(pageIndex: Int, pageSize: Int): Page<User> {
        val pageRequest = PageRequest(pageIndex, pageSize)
        return userRepository.findAll(pageRequest)
    }

    override fun del(id: Long?) {
        val user = userRepository.getOne(id)
        for (car: Car in user.carList!!)
            carRepository.delete(car)
        userRepository.delete(id)
    }
}
