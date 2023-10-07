package veterinerapp.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import veterinerapp.entity.Animal;
import veterinerapp.enums.Message;
import veterinerapp.repository.IAnimalRepository;
import veterinerapp.requests.AnimalRequest;
import veterinerapp.response.ApiResponse;
import veterinerapp.services.AnimalService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/animals")
@RequiredArgsConstructor
public class AnimalController {
 private final AnimalService animalService;
 @Autowired
 private final IAnimalRepository animalRepository;


    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addAnimal(@RequestBody AnimalRequest addAnimalRequest){
    return animalService.addAnimal(addAnimalRequest);
}
    @GetMapping("/list")
    public ResponseEntity<ApiResponse> listAnimal(@RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "10") int size) {
        return animalService.getAnimals(page,size);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteAnimal(@PathVariable UUID id){
        return animalService.deleteAnimal(id);

    }
    @PutMapping("/update/{id}")
    public ResponseEntity<ApiResponse> updateAnimal(@PathVariable UUID id, @RequestBody AnimalRequest animalRequest)
    {
        return animalService.updateAnimal(animalRequest,id);
    }

}
