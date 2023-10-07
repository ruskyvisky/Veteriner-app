package veterinerapp.services;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import veterinerapp.entity.Animal;
import veterinerapp.enums.Message;
import veterinerapp.repository.IAnimalRepository;
import veterinerapp.requests.AnimalRequest;
import veterinerapp.response.ApiResponse;


import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AnimalService {
    private final IAnimalRepository animalRepository;
    public ResponseEntity<ApiResponse> addAnimal(AnimalRequest addAnimalRequest){
var existingAnimal = animalRepository.findByAnimalName(addAnimalRequest.getAnimalName());

        if(Objects.nonNull(existingAnimal))
        {
            return new ResponseEntity<>(ApiResponse.builder().message(Message.ANIMAL_ALREADY_EXISTS.getDesc()).build(), HttpStatus.CONFLICT);
        }
        var animal = Animal.builder()
                .animalName(addAnimalRequest.getAnimalName())
                .animalAge(addAnimalRequest.getAnimalAge())
                .animalRace(addAnimalRequest.getAnimalRace())
                .animalType(addAnimalRequest.getAnimalType())
                .medicines(addAnimalRequest.getMedicines())
                .parentContact(addAnimalRequest.getParentContact())
                .vaccines(addAnimalRequest.getVaccines())
                .parentName(addAnimalRequest.getParentName())
                .specialNote(addAnimalRequest.getSpecialNote())
                .createdAt(LocalDateTime.now()).build();

   animalRepository.save(animal);
        return new ResponseEntity<>(ApiResponse.builder().data(animalRepository.save(animal)).message(Message.SUCCESS.getDesc()).build() , HttpStatus.OK);

    }

    public ResponseEntity<ApiResponse> updateAnimal(AnimalRequest animalRequest,UUID id){
        Animal existingAnimal = animalRepository.findById(id).orElse(null);

        if (Objects.isNull(existingAnimal)) {
            return new ResponseEntity<>(
                    ApiResponse.builder().message(Message.ANIMAL_NOT_FOUND.getDesc()).build(),
                    HttpStatus.NOT_FOUND
            );
        }
        existingAnimal.setAnimalName(animalRequest.getAnimalName());
        existingAnimal.setAnimalType(animalRequest.getAnimalType());
        existingAnimal.setAnimalAge(animalRequest.getAnimalAge());
        existingAnimal.setAnimalRace(animalRequest.getAnimalRace());
        existingAnimal.setParentName(animalRequest.getParentName());
        existingAnimal.setParentContact(animalRequest.getParentContact());
        existingAnimal.setSpecialNote(animalRequest.getSpecialNote());
        existingAnimal.setMedicines(animalRequest.getMedicines());
        existingAnimal.setVaccines(animalRequest.getVaccines());
        animalRepository.save(existingAnimal);
        return new ResponseEntity<>(
                ApiResponse.builder().message(Message.SUCCESS.getDesc()).build(),
                HttpStatus.OK
        );
    }

    public ResponseEntity<ApiResponse> deleteAnimal(UUID id){
        Animal animal = animalRepository.findById(id).orElse(null);
        if(Objects.isNull(animal)){
            return new ResponseEntity<>(ApiResponse.builder().message(Message.ANIMAL_NOT_FOUND.getDesc()).build(), HttpStatus.NOT_FOUND);
        }
        animalRepository.deleteById(id);
        return new ResponseEntity<>(ApiResponse.builder().message(Message.SUCCESS.getDesc()).build(), HttpStatus.OK);
    }

    public ResponseEntity<ApiResponse> getAnimals(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Animal> animals = animalRepository.findAll(pageable);

        long totalElements = animals.getTotalElements(); // Toplam veri sayısı
        long totalPages = animals.getTotalPages();
        long currentPage = animals.getNumber() + 1;
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("data", animals.getContent());
        responseData.put("totalElements", totalElements);
        responseData.put("totalPages",totalPages);
        responseData.put("currentPage",currentPage);

        return ResponseEntity.ok(ApiResponse.builder()
                .data(responseData)
                .message(Message.SUCCESS.getDesc())
                .build());
    }


}
