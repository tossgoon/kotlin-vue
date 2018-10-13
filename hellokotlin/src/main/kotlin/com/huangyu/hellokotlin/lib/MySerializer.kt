package com.huangyu.hellokotlin.lib

import kotlinx.serialization.KInput
import kotlinx.serialization.KOutput
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializer

@Serializer(forClass = Long::class)
object MyLongSerializer : KSerializer<Long> {
    override fun save(output: KOutput, obj: Long) {
        return try {
            output.writeLongValue(obj)
        } catch (e: Exception) {
        } finally {
            null
        }
    }

    override fun load(input: KInput): Long {
        return try {
            input.readLongValue()
        } catch (e: Exception) {
            0
        } finally {
            null
        }
    }
}