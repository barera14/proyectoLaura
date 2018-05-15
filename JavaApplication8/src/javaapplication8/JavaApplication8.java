/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication8;

import java.util.Scanner;

/**
 *
 * @author Alejandro Bernal
 */
public class JavaApplication8 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
         int i, suma = 0, n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Introduce un número: ");
        n = sc.nextInt();
        for (i = 1; i < n; i++) {  
            if (n % i == 0) {
                suma = suma + i;    
            }
        }
        if (suma == n) { 
            System.out.println("Es un numero Perfecto");
        } else {
            System.out.println("No es un numero perfecto");

        }
    }
    
}
