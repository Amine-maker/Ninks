package com.app.dashboardapi.model;

import java.util.ArrayList;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("events")
public class EventMessage {

    @Id
    private String id;

    private String clientId;

    private String siteId;

    private Long clientTimestamp;

    private Long serverTimestamp;

    private String userAgent;

    private String ipAddress;

    private ArrayList<InnerIEvents> events;

    public EventMessage(String id, String clientId, String siteId, Long clientTimestamp, String ipAddress,
            ArrayList<InnerIEvents> events) {
        this.id = id;
        this.clientId = clientId;
        this.siteId = siteId;
        this.ipAddress = ipAddress;
        this.clientTimestamp = clientTimestamp;
        this.events = events;
    }

}
