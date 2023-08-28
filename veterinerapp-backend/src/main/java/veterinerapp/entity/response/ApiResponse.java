package veterinerapp.entity.response;

import com.fasterxml.jackson.annotation.JsonView;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import veterinerapp.entity.views.Views;

@Builder
@NoArgsConstructor
@Data
@JsonView(Views.Essential.class)

public class ApiResponse {


    private String message;
    private Object data;

    public ApiResponse(Object data) {
        this.data = data;
    }

    public ApiResponse(String message) {
        this.message = message;
    }

    public ApiResponse(String message, Object data) {
        this.message = message;
        this.data = data;
    }
}
