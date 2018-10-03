package com.huangyu.hellokotlin.dao

import java.util.*
import javax.persistence.*

@MappedSuperclass
open class BaseEntity<ID : Long> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open var id: ID? = null
    var createdTime: Date? = null

    @Column(name = "available", nullable = false, columnDefinition = "bit(1) default 1")
    var available: Boolean = false

    @Column(name = "logicDel", nullable = false, columnDefinition = "bit(1) default 0")
    var logicDel: Boolean = false
}
