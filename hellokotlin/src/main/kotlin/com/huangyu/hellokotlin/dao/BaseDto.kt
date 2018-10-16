package com.huangyu.hellokotlin.dao

import com.huangyu.hellokotlin.lib.MyLongSerializer
import kotlinx.serialization.Serializable
import java.util.*
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.MappedSuperclass

@Serializable
@MappedSuperclass
open class BaseEntity(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Serializable(with = MyLongSerializer::class)
                      var id: Long = 0,
                      var available: Boolean = true,
                      var logicDel: Boolean = false,
                      var createdTime: Date = Date())