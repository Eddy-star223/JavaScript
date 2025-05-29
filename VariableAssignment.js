public class VariableAssignment {
public static void main(String[] args) {

System.out.print("Enter number: ");
int var1 = input.nextInt();
int var2 = input.nextInt();
int var3 = input.nextInt();

int temp = 0;

temp = var1;
var1 = var2;
var2 = var3;
var3 = temp;


System.out.println(var1);
System.out.println(var2);
System.out.println(var3)