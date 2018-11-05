package com.huangyu.hellokotlin.test

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.huangyu.Application
import com.huangyu.common.gson.GsonDateTypeAdapter
import com.huangyu.common.gson.GsonLongTypeAdapter
import com.huangyu.common.web.ApiResponse
import com.huangyu.common.web.ReturnCodeEnum
import com.huangyu.hellokotlin.dao.Car
import com.huangyu.hellokotlin.dao.User
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.test.context.junit4.SpringRunner
import java.util.*

var userId: Long = 0

@RunWith(SpringRunner::class)
@SpringBootTest(classes = [Application::class], webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserTest {

    @Autowired lateinit var testRestTemplate: TestRestTemplate

    @Test fun add() {
        var user = User()
        user.id = 38
        user.age = 35.toString()
        user.name = "wangyu123"
        user.phone = "186-8949-1313"

        val carList = ArrayList<Car>()
        val car = Car()
        car.brand = "444444"
        car.name = "ale5555xa321"

        carList.add(car)
        user.carList = carList

        val gson = GsonBuilder().serializeNulls().registerTypeAdapter(Long::class.java, GsonLongTypeAdapter()).registerTypeAdapter(Date::class.java, GsonDateTypeAdapter()).create()
        val userJson = gson.toJson(user, User::class.java)
        val result = Gson().fromJson<ApiResponse>(testRestTemplate.getForObject(TestURL.addUser + "?userJson={userJson}", String::class.java, userJson), ApiResponse::class.java)
        assert(result.code == ReturnCodeEnum.success.ordinal)
        user = gson.fromJson(result.data.toString(), User::class.java)

        userId = user.id
    }

    @Test fun get() {
        val result = Gson().fromJson<ApiResponse>(testRestTemplate.getForObject(TestURL.getUser + "?id=" + userId, String::class.java), ApiResponse::class.java)
        assert(result.code == ReturnCodeEnum.success.ordinal)
        val gson = GsonBuilder().serializeNulls().registerTypeAdapter(Long::class.java, GsonLongTypeAdapter()).registerTypeAdapter(Date::class.java, GsonDateTypeAdapter()).create()
        val user: User = gson.fromJson<User>(result.data.toString(), User::class.java)
        assert(user.id == userId)
    }
}

// 22000 + 30000 + 15000 + 10000