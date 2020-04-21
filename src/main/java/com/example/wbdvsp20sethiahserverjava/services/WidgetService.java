package com.example.wbdvsp20sethiahserverjava.services;

import com.example.wbdvsp20sethiahserverjava.models.Topic;
import com.example.wbdvsp20sethiahserverjava.models.Widget;
import com.example.wbdvsp20sethiahserverjava.repositories.TopicRepository;
import com.example.wbdvsp20sethiahserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    TopicRepository topicRepository;

    public Widget createWidget( int tid,
            Widget newWidget) {
        Topic topic = topicRepository.findTopicById(tid);
        newWidget.setTopic(topic);
        return widgetRepository.save(newWidget);
    }

    public Widget findWidgetById(Integer wid) {
        return widgetRepository.findWidgetById(wid);
    }

    public List<Widget> findAllWidgets() {
        return widgetRepository.findAllWidgets();
    }

    public List<Widget> findWidgetsForTopic(int topicId) {
        return widgetRepository.findWidgetForTopic(topicId);
    }

    public int deleteWidget(Integer wid) {
        widgetRepository.deleteById(wid);
        return 1;
    }

    public int updateWidget(Integer wid, Widget widget) {
        widget.setId(wid);
        widgetRepository.save(widget);
        return 1;
    }
}
