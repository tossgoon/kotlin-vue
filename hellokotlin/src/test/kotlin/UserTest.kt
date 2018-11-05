package com.huangyu.hellokotlin.test

import com.google.gson.Gson
import com.huangyu.Application
import com.huangyu.common.web.ApiResponse
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(classes = [Application::class], webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SimpleTest {
    @Autowired lateinit var testRestTemplate: TestRestTemplate

    @Test fun whenCalled_shouldReturnHello() {
        val result = Gson().fromJson<ApiResponse>(testRestTemplate.getForObject("/user/get?id=" + 1, String::class.java), ApiResponse::class.java)
        assert(result.code == 2)
    }
}