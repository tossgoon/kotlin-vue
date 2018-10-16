package com.huangyu.hellokotlin.lib.gson

import com.google.gson.*


class GsonLongTypeAdapter : JsonDeserializer<Long>, JsonSerializer<Long> {

    override fun serialize(src: Long?, typeOfSrc: java.lang.reflect.Type, context: JsonSerializationContext): JsonElement {
        return JsonPrimitive(src)
    }

    @Throws(JsonParseException::class)
    override fun deserialize(json: JsonElement, typeOfT: java.lang.reflect.Type, context: JsonDeserializationContext): Long? {

        val cost: Long?
        try {
            cost = json.asLong
        } catch (e: NumberFormatException) {
            return null
        }

        return cost
    }

}