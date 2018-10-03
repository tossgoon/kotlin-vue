package com.huangyu.hellokotlin

import java.lang.Integer.parseInt

class Main {

    fun maxOf(a: Int, b: Int) = if (a > b) a else b

    fun describe(obj: Any): String =
            when (obj) {
                1 -> "One"
                "Hello" -> "Greeting"
                else -> "Unknown"
            }

    fun lambdaTest() {
        Thread { println("In Java8!") }.start()
    }

    infix fun Int.add(x: Int) = this + x

    fun addTest() {
        var x = 100 add 200
        println("100 and 200 === $x")
    }

    val sum = fun Int.(other: Int) = this + other
}

fun main(args: Array<String>) {
    val map = mapOf(1 to "one", 2 to "two")
    map.forEach { _, value -> println("$value!") }

    println(Main().maxOf(1, 100))

    println(1.toString().toIntOrNull())
    println("abc".toIntOrNull())

    println(parseInt("100"))
    // println(parseInt("aaa"))

    var strList = listOf("111", "222", "333")

    for (str in strList)
        println(str)

    for (index in strList.indices)
        println("str in $index is ${strList[index]}")

    println(Main().describe(1))
    println(Main().describe("Hello"))
    println(Main().describe(1111111111111))

    val p: String by lazy { "abc" }
    println(p)

    var pp: String? = null

    var len = pp?.length ?: -1
    println("pp'length is $len")

    val c = "abcdefg"
    var d = c::class
    println("c's class is $d")

    Main().lambdaTest()

    Main().addTest()

    println(Main().sum(200, 300))
}

