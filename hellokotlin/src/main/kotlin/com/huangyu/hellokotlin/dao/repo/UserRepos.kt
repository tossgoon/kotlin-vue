package com.huangyu.hellokotlin.dao.repo

import com.huangyu.hellokotlin.dao.Car
import com.huangyu.hellokotlin.dao.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long>
interface CarRepository : JpaRepository<Car, Long>