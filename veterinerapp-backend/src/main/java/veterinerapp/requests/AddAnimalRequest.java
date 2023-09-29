package veterinerapp.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddAnimalRequest {

    private String animalName;
    private String animalType;
    private String animalAge;
    private String animalRace;
    private String parentName;
    private String parentContact;
    private String specialNote;
    private List<String> medicines;
    private List<String> vaccines;

}
