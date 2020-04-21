package com.example.wbdvsp20sethiahserverjava.controllers;

import com.example.wbdvsp20sethiahserverjava.models.Widget;
import com.example.wbdvsp20sethiahserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    @Autowired
    WidgetService service;

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidget(@PathVariable("tid") int topicId,
            @RequestBody Widget newWidget) {
        return service.createWidget(topicId,newWidget);
    }


    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetForTopic(
            @PathVariable("tid") Integer topicId) {
        return service.findWidgetsForTopic(topicId);
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public int deleteWidget(
            @PathVariable("widgetId") Integer wid) {
        return service.deleteWidget(wid);
    }

    @PutMapping("/api/widgets/{widgetId}")
    public int updateWidget(
            @PathVariable("widgetId") Integer wid,
            @RequestBody Widget updatedWidget) {
        return service.updateWidget(wid, updatedWidget);
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(
            @PathVariable("widgetId") Integer wid) {
        return service.findWidgetById(wid);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }

}
