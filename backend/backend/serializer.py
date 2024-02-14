from rest_framework import serializers

from userauths.models import Profile, User

class UserSerializer(serializers.ModelSerializer):
    #we will just create a class meta so that we can add things like the model that we are interacting
    class Meta:
        model =User
        fields = "__all__"
        
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    
    class Meta:
         model = Profile
         fields =  "__all__"
    def to_representation(self, instance):
        response= super().to_representation(self,instance):
        response['user'] = userSerializer(instance,User).data
        return response