package com.huangyu.hellokotlin.dao

import javax.persistence.*

@Entity
@Table(name = "kotlin_users")
data class User constructor(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Long?, var name: String, var age: String?, var phone: String) {
    constructor() : this(1, "wangyu", "", "18689495151")
}