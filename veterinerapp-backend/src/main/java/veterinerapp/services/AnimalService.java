package veterinerapp.services;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import veterinerapp.entity.Animal;
import veterinerapp.enums.Message;
import veterinerapp.repository.IAnimalRepository;
import veterinerapp.repository.IUserRepository;
import veterinerapp.requests.AddAnimalRequest;
import veterinerapp.response.ApiResponse;


import java.time.LocalDateTime;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AnimalService {

    private final IAnimalRepository animalRepository;
    public ResponseEntity<ApiResponse> addAnimal(AddAnimalRequest addAnimalRequest){

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

}
