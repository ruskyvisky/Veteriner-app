package veterinerapp.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnimalRequest {
    private UUID id;
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
