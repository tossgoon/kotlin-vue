package com.huangyu;

public class Main {
    public static void main(String[] args) {
        System.out.println("--------------------");
        lambdaTest();

        int x = 100 +200;

        System.out.print(x);
    }

    static void lambdaTest() {
        new Thread(() -> System.out.println("In Java8!")).start();
    }
}
