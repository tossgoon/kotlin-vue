package com.huangyu.hellokotlin.dao

import com.huangyu.hellokotlin.lib.MyLongSerializer
import kotlinx.serialization.Serializable
import javax.persistence.*


@Serializable
@Entity
@Table(name = "kotlin_users")
data class User(@Id @GeneratedValue(
        strategy = GenerationType.IDENTITY) @Serializable(with = MyLongSerializer::class) var id: Long? = null,
                var name: String = "",
                var age: String? = null,
                var phone: String = "")