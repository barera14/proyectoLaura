/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication9;

import java.util.Arrays;

/**
 *
 * @author Alejandro Bernal
 */
public class JavaApplication9 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
     int [] a  = {7,2,4,8,3,7,1,5,10,6,6,2};
    int temporal = 0;
    int [] nuevo = new int[14];
    for (int i = 0; i < a.length; i++) {
        for (int j = 1; j < (a.length - i); j++) {
            if (a[j - 1] > a[j]) {
                temporal = a[j - 1];
                a[j - 1] = a[j];
                a[j] = temporal;
                
            }
        }
    }
        for (int i = 0; i < a.length; i++) {
            int num=a[i];
            int num1=a[i];
            if(num!=num1){
             nuevo[i]=a[i];
           }
        }
        
        for (int i = 0; i < nuevo.length; i++) {
            System.out.println("asd"+nuevo[i]);
        }
    
}
}
