package veterinerapp.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import veterinerapp.entity.Animal;
import veterinerapp.entity.Treatment;
import veterinerapp.enums.Message;
import veterinerapp.repository.IAnimalRepository;
import veterinerapp.repository.ITreatmentRepository;
import veterinerapp.requests.TreatmentRequest;
import veterinerapp.response.ApiResponse;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TreatmentService {
    private final ITreatmentRepository treatmentRepository;
    private final IAnimalRepository animalRepository;

    public ResponseEntity<ApiResponse> addTreatment(UUID animalId, TreatmentRequest treatmentRequest) {
        Optional<Animal> optionalAnimal = animalRepository.findById(animalId);
        if (optionalAnimal.isPresent()) {
            Animal animal = optionalAnimal.get();
            Treatment treatment = new Treatment();
            treatment.setTreatmentType(treatmentRequest.getTreatmentType());
            treatment.setCreateTime(LocalDate.now());
            animal.getTreatments().add(treatment);
            animalRepository.save(animal);
            return new ResponseEntity<>(ApiResponse.builder().message(Message.SUCCESS.getDesc()).build(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(ApiResponse.builder().message(Message.ANIMAL_NOT_FOUND.getDesc()).build(), HttpStatus.NOT_FOUND);
        }
    }
    public ResponseEntity<ApiResponse> deleteTreatment (UUID id){
        Treatment treatment = treatmentRepository.findById(id).orElse(null);
        if(Objects.isNull(treatment)){
            return new ResponseEntity<>(ApiResponse.builder().message(Message.TREATMENT_NOT_FOUND.getDesc()).build(), HttpStatus.NOT_FOUND);

        }
        treatmentRepository.deleteById(id);
        return new ResponseEntity<>(ApiResponse.builder().message(Message.SUCCESS.getDesc()).build(),HttpStatus.OK);
    }






}
