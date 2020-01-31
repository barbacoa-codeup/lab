public class Lab3 {
    public static void main(String args[]) {
        permutation("xyz");
        conversion();
        swapInt(30,50);
    }

    public static void permutation(String input) {
        permutation("", input);
    }

    public static void permutation(String perm, String word) {
        if (word.isEmpty()) {
            System.err.println(perm + word);
        } else {
            //permutation is basically a factorial
            for (int i = 0; i < word.length(); i++) {
                // first parameter of permutation() method) will be "" + 1 as we are doing word.charAt(i) and i is zero
                permutation(perm + word.charAt(i), word.substring(0, i) + word.substring(i + 1));
            }
        }
    }

    // Convert int to String and vice versa
    public static void conversion() {
        int x = Integer.parseInt("000000081");
        System.out.println("x from String to int: " + x);
        // Concatenating a number to an empty string
        String y = "" + 123;
        System.out.println("y: " + y);
        System.out.println("To check if y is now a string, concatenating y + 2: " + (y + 2) );
    }

    // Swapping integers without temp variable
    public static void swapInt(int a, int b){
        System.out.println("value of a and b before swapping:\na: " + a + "\nb: " + b);
        a = a+ b; // reassigning value of a to hold the sum
        b = a -b; // b = (a + b) - b = a
        a = a -b; // a = a + b - a = b
        System.out.println("value of a and b after swapping:\na: " + a + "\nb: " + b);
    }

}



