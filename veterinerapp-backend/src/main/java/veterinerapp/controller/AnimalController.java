package veterinerapp.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import veterinerapp.requests.AddAnimalRequest;
import veterinerapp.response.ApiResponse;
import veterinerapp.services.AnimalService;
import veterinerapp.services.UserService;

@RestController
@RequestMapping("/api/v1/animals")
@RequiredArgsConstructor
public class AnimalController {
 private final AnimalService animalService;


    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addAnimal(@RequestBody AddAnimalRequest addAnimalRequest){
    return animalService.addAnimal(addAnimalRequest);
}
}
