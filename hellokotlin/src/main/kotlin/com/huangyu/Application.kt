package com.huangyu

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter


@SpringBootApplication
class Application {

    @Bean
    fun openEntityManagerInViewFilter(): OpenEntityManagerInViewFilter {
        return OpenEntityManagerInViewFilter()
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(Application::class.java, *args)
        }
    }
}