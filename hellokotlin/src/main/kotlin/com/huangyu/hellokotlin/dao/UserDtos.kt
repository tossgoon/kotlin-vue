package com.huangyu.hellokotlin.dao

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import javax.persistence.*

@Entity @Table(name = "kotlin_users")
data class User(
        var name: String = "",
        var age: String? = null,
        var phone: String = "",
        @OneToMany(mappedBy = "user") @JsonIgnoreProperties("carList", "user") var carList: List<Car>? = null
) : BaseEntity()

@Entity @Table(name = "kotlin_user_cars")
data class Car(
        var name: String = "",
        var brand: String = "",
        @ManyToOne @JoinColumn(name = "user_id") var user: User? = null
) : BaseEntity()