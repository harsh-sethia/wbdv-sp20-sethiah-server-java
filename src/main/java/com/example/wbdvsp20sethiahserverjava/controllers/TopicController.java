package com.example.wbdvsp20sethiahserverjava.controllers;


import com.example.wbdvsp20sethiahserverjava.models.Topic;
import com.example.wbdvsp20sethiahserverjava.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TopicController {
    @Autowired
    TopicService topicService;

    @PostMapping("/api/lessons/{lid}/topics")
    public Topic createTopic(@PathVariable("lid") String lessonId, @RequestBody Topic topic) {
        return topicService.createTopic(lessonId, topic);
    }

    @PutMapping("/api/topics/{tid}")
    public int updateTopic(@PathVariable("tid") int topicId, @RequestBody Topic topic) {
        return topicService.updateTopic(topicId, topic);
    }

    @GetMapping("/api/topics")
    public List<Topic> findAllTopics() {
        return topicService.findAllTopics();
    }

    @GetMapping("/api/topics/{tid}")
    public Topic findTopicById(@PathVariable("tid") int topicId) {
        return topicService.findTopicById(topicId);
    }

    @GetMapping("/api/lessons/{lid}/topics")
    public List<Topic> findTopicsForLesson(@PathVariable("lid") String lessonId) {
        return topicService.findTopicsForLesson(lessonId);
    }

    @DeleteMapping("/api/topics/{tid}")
    public int deleteTopic(@PathVariable("tid") int topicId) {
        return topicService.deleteTopic(topicId);
    }
}
