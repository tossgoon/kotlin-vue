package com.huangyu.hellokotlin.dao

import kotlinx.serialization.Serializable
import javax.persistence.Entity
import javax.persistence.Table


@Serializable
@Entity
@Table(name = "kotlin_users")
data class User(
        var name: String = "",
        var age: String? = null,
        var phone: String = "") : BaseEntity()