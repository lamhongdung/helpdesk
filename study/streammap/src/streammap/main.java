package streammap;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> listOfStrings = Arrays.asList(1, 2, 3, 4, 5);
		 
		List<Integer> listOfIntegers = listOfStrings.stream()
		        .map(p -> p + 10)
		        .collect(Collectors.toList());
		 
		System.out.println(listOfIntegers);
	}

}
