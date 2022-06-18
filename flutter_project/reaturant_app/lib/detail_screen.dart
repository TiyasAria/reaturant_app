import 'package:flutter/material.dart';
import 'package:reaturant_app/model.dart';
import 'package:reaturant_app/theme.dart';

class DetailScreen extends StatelessWidget {
  static const routeName = '/detailScreen';

  final Restaurant restaurant;

  const DetailScreen({required this.restaurant});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          restaurant.name,
          style: commonText,
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Image.network(
              restaurant.pictureId,
              fit: BoxFit.cover,
            ),
            const SizedBox(height: 5),
            Text(
              restaurant.name,
              style: titleDetail,
            ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Row(children: [
                  const Icon(
                    Icons.location_on_rounded,
                    size: 14,
                    color: Colors.red,
                  ),
                  const SizedBox(
                    width: 8,
                  ),
                  Text(
                    restaurant.city,
                    style: commonText,
                  )
                ]),
                Row(
                  children: [
                    const Icon(
                      Icons.star,
                      size: 14,
                      color: Colors.yellow,
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    Text(
                      restaurant.rating.toString(),
                      style: commonText,
                    )
                  ],
                )
              ],
            ),
            Padding(
                padding: const EdgeInsets.symmetric(horizontal: 14),
                child: Text(
                  restaurant.description,
                  style: commonText,
                )),
            const SizedBox(height: 5,),
            Text('Food Menu', style: titleList,),
            SizedBox(
              height: 50,
              child: ListView(
                children: [
                  Text(restaurant.menus.foods.map((e) => e.name).toString())
                ],
              ),
            ),
            Text('Drink Menu', style: titleList,),
            SizedBox(
              height:50,
              child: ListView(
                children: [
                  Text(restaurant.menus.drinks.map((e) => e.name).toString())
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
