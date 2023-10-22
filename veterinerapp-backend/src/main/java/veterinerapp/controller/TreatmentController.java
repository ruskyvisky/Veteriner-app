package veterinerapp.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import veterinerapp.entity.Treatment;
import veterinerapp.requests.TreatmentRequest;
import veterinerapp.response.ApiResponse;
import veterinerapp.services.TreatmentService;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/treatment")
@RequiredArgsConstructor
public class TreatmentController {

    private final TreatmentService treatmentService;
    @PostMapping("/add/")
    public ResponseEntity<ApiResponse> addTreatment(@RequestBody TreatmentRequest treatmentRequest) {
        return treatmentService.addTreatment(treatmentRequest.getId(), treatmentRequest);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteTreatment(@PathVariable UUID id){
        return treatmentService.deleteTreatment(id);
    }

}
// TODO: Tedavi Silme , Tedavi Güncelleme , Hayvanlar tablosunda tanımlı tedavi varsa animal responseda liste şeklinde dön.
// TODO: Tedavi için rapor yükleme özelliği file yükleme özelliği oluşturabilirsin.
