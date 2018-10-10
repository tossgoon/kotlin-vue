package com.huangyu.hellokotlin.dao

import javax.persistence.*

@Entity
@Table(name = "kotlin_users")
data class User constructor(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Long?, var name: String?, var age: String?) {
    constructor() : this(1, "", "")
}