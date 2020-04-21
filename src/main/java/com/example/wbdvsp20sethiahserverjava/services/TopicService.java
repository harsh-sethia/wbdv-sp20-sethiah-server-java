package com.example.wbdvsp20sethiahserverjava.services;


import com.example.wbdvsp20sethiahserverjava.models.Topic;
import com.example.wbdvsp20sethiahserverjava.models.Widget;
import com.example.wbdvsp20sethiahserverjava.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired
    TopicRepository topicRepository;

    public Topic createTopic(String lid,
            Topic newTopic) {
        newTopic.setLessonId(lid);
        return topicRepository.save(newTopic);
    }

    public Topic findTopicById(Integer topicId) {
        return topicRepository.findTopicById(topicId);
    }

    public List<Topic> findAllTopics() {
        return topicRepository.findAllTopics();
    }

    public List<Topic> findTopicsForLesson(String lid) {
        return topicRepository.findTopicForLesson(lid);
    }

    public int deleteTopic(Integer wid) {
        topicRepository.deleteById(wid);
        return 1;
    }

    public int updateTopic(Integer tid, Topic topic) {
        topic.setId(tid);
        topicRepository.save(topic);
        return 1;
    }
}
